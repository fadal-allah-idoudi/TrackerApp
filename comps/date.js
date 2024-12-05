export function getFormatDate(date) {
    
    if (!date) return ''; // Handle case where date is undefined or null

    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;}
export function getDateMinusDays(date,days){
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days)
}    