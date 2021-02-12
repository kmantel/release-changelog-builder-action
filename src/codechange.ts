import moment from 'moment'

export interface CodeChangeInfo {
    author: string
    date: moment.Moment
  }

export function sortCodeChanges(
    codeChanges: CodeChangeInfo[],
    ascending: Boolean
): CodeChangeInfo[] {
if (ascending) {
    codeChanges.sort((a, b) => {
    if (a.date.isBefore(b.date)) {
        return -1
    } else if (b.date.isBefore(a.date)) {
        return 1
    }
    return 0
    })
} else {
    codeChanges.sort((b, a) => {
    if (a.date.isBefore(b.date)) {
        return -1
    } else if (b.date.isBefore(a.date)) {
        return 1
    }
    return 0
    })
}
return codeChanges
}
