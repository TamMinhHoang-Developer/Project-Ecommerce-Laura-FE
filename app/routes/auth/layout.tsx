export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2">
        <img src="/auth/left.png" alt="left" className="w-full h-full" />
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
}
