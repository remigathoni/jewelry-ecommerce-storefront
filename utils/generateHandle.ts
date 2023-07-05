

function getHandle(text: string) {
  const handle = text.toLowerCase().split(" ").join("-")
  return handle
}

export default getHandle
