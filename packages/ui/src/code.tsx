import {Card} from "@sdk/src/card"
export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={className}>{children}<Card title={""} children={undefined} href={""} /></code>;
}
