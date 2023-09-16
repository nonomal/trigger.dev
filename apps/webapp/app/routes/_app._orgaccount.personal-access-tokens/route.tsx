import { Form, useFetcher } from "@remix-run/react";
import { ActionFunction, json } from "@remix-run/server-runtime";
import { customAlphabet } from "nanoid";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { AccessBadge } from "~/components/ActiveBadge";
import { PageBody, PageContainer } from "~/components/layout/AppLayout";
import { Button } from "~/components/primitives/Buttons";
import { ClipboardField } from "~/components/primitives/ClipboardField";
import { DateTime } from "~/components/primitives/DateTime";
import { FormButtons } from "~/components/primitives/FormButtons";
import { Paragraph } from "~/components/primitives/Paragraph";
import { Spinner } from "~/components/primitives/Spinner";
import {
  Table,
  TableBlankRow,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "~/components/primitives/Table";
import { prisma } from "~/db.server";
import { redirectWithSuccessMessage } from "~/models/message.server";
import { requireUserId } from "~/services/session.server";
import { personalAccessTokensPath } from "~/utils/pathBuilder";

export const loader = async ({ request }: { request: Request }) => {
  const userid = await requireUserId(request);
  const tokens = await prisma.personalAccessToken.findMany({
    where: {
      userId: userid,
    },
  });
  return typedjson({ tokens });
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  try {
    const apiKeyId = customAlphabet(
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      12
    );

    const personalAccessToken = `tr_pat_${apiKeyId(20)}`;

    await prisma.personalAccessToken.create({
      data: {
        token: personalAccessToken,
        userId: userId,
      },
    });

    return redirectWithSuccessMessage(
      personalAccessTokensPath(),
      request,
      "Personal Token Access Generated."
    );
  } catch (error: any) {
    return json({ errors: { body: error.message } }, { status: 400 });
  }
};

export default function Page() {
  const { tokens } = useTypedLoaderData<typeof loader>();
  const fetcher = useFetcher();

  const isLoading =
    fetcher.state === "submitting" ||
    (fetcher.state === "loading" && fetcher.formMethod === "DELETE");

  return (
    <PageContainer>
      <PageBody>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Token</TableHeaderCell>
              <TableHeaderCell>Last accessed at</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell alignment="right">Action</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens.length === 0 && (
              <TableBlankRow colSpan={4} className="flex w-full items-center justify-center">
                <Paragraph>No generated tokens</Paragraph>
              </TableBlankRow>
            )}
            {tokens.length > 0 &&
              tokens.map((token) => {
                return (
                  <TableRow key={token.id}>
                    <TableCell>
                      <ClipboardField
                        className="max-w-max"
                        secure
                        value={token.token}
                        variant={"secondary/small"}
                      />
                    </TableCell>
                    <TableCell>
                      {token.lastAccessedAt ? (
                        <DateTime date={token.lastAccessedAt} />
                      ) : (
                        "Never accessed"
                      )}
                    </TableCell>
                    <TableCell>
                      {token.revokedAt === null ? (
                        <AccessBadge active={true} />
                      ) : (
                        <AccessBadge active={false} />
                      )}
                    </TableCell>
                    <TableCell alignment="right">
                      {token.revokedAt === null ? (
                        <fetcher.Form
                          method="delete"
                          action={`/personal-access-tokens/${token.id}`}
                          className="flex w-full justify-end"
                        >
                          {isLoading ? (
                            <Spinner color="white" />
                          ) : (
                            <Button
                              variant="secondary/small"
                              LeadingIcon="close"
                              leadingIconClassName="text-bright"
                            >
                              Revoke
                            </Button>
                          )}
                        </fetcher.Form>
                      ) : (
                        <Button
                          variant="danger/small"
                          LeadingIcon="trash-can"
                          leadingIconClassName="text-bright"
                        >
                          Delete
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

        <Form method="post" className="my-4 flex w-full justify-end">
          <FormButtons
            confirmButton={
              <Button type="submit" variant={"primary/medium"}>
                Generate Token
              </Button>
            }
          />
        </Form>
      </PageBody>
    </PageContainer>
  );
}
