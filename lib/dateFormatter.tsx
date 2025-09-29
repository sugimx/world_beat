const dateFormatter = (isoString: string): string => {
    const monthAbbreviations = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    const date = new Date(isoString)
    const month = (date.getMonth() + 1)
    const day = String(date.getDate()).padStart(2, '0')
    const year = date.getFullYear()
    return `${monthAbbreviations[month]} ${day}, ${year}`
}
export default dateFormatter