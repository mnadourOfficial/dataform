/**
 * Returns a WHERE clause to filter for a given number of days back.
 */
function dateFilter(column, days) {
  return `DATE(${column}) >= DATE_SUB(CURRENT_DATE(), INTERVAL ${days} DAY)`;
}

/**
 * Generates a surrogate key from a list of columns.
 */
function surrogateKey(columns) {
  const cols = columns.map(c => `CAST(${c} AS STRING)`).join(", '-', ");
  return `TO_HEX(MD5(CONCAT(${cols})))`;
}

module.exports = { dateFilter, surrogateKey };
