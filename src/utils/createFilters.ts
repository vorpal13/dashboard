export const createFilters = <T, K extends keyof T>(data: T[], key: K) => {
  return data.map((item) => ({
    text: item[key],
    value: item[key],
  }))
}
