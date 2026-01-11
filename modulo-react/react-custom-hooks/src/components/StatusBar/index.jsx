import { useOnlineStatus } from "../../components/hooks/useOnlineStatus";

export default function StatusBar() {
  const isOnline = useOnlineStatus()

  return (
    <>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </>
  );
}
