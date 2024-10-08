const MONTHS = ['JAN','FEB', 'MAR','APR','MAY','JUNE','JUL','AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function formatDateForArticle(argDate) {
    const freshDate = new Date(argDate);

    const monthNumber = freshDate.getMonth();

    const month = MONTHS[monthNumber];
    const day = freshDate.getDate();
    const formattedDay = (day > 9) ? day : ('0'+day);
    const year = freshDate.getFullYear();
    const weekday = WEEK[freshDate.getDay()];

    return `${weekday}, ${month} ${formattedDay}, ${year}`;
}