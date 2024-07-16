export const decodeBase64Value = (value: string) => {
  try {
    const jsonString = Buffer.from(value, 'base64').toString('utf8')
    const jsonData = JSON.parse(jsonString)
    return jsonData
  } catch (error) {
    throw new Error(`Error decoding Base64 string: ${(error as Error).message}`)
  }
}
