export async function getOwnCoordinates() {
  const response = await fetch('/session-coordinates', {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  });

  return await response.json();
}