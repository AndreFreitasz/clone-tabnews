import useSWR from "swr";

async function fetchStatus(endpoint) {
  const response = await fetch(endpoint);
  const responseBody = await response.json();

  return responseBody;
}

function StatusContent() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchStatus, {
    refreshInterval: 2000,
  });

  if (isLoading) return <p>Carregando...</p>;

  const dataDatabase = data.dependencies.database;

  return (
    <>
      <p>
        Última atualização: {new Date(data.updated_at).toLocaleString("pt-BR")}
      </p>
      <p>Máximo de conexões: {dataDatabase.max_connections}</p>
      <p>Conexões Abertas: {dataDatabase.opened_connections}</p>
      <p>Versão do banco de dados: {dataDatabase.version}</p>
    </>
  );
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <StatusContent />
    </>
  );
}
