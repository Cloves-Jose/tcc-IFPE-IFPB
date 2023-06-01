export function actualDate() {
    const date = new Date

    return date.toISOString()
}

export function formatDate(date: string, timeZone: string) {
    const result = new Date(date).toLocaleDateString(timeZone, { hour: 'numeric', minute: 'numeric', second: 'numeric' })

    return result.replace(",", " - ")
}


