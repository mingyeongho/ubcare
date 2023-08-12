import StyledComponentsRegistry from "@/utils/lib/registry";
import type { Metadata } from "next";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "UbCare",
  description: "ubcare admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <StyledComponentsRegistry>
          <Provider>{children}</Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
