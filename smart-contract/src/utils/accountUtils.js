import { userNames } from "../constants"

export const userOptions = (accounts) => {
  return accounts.map((account, i) => {
    return {
      label: userNames[i],
      value: account
    }
  })
}