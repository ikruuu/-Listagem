import React from 'react';
import styles from './Table.module.css';
import App from '../../App';

const Head = ({keys, head}) => {
  return (
    <thead>
      <tr>
        {keys.map((key) => (
          <th key={key} className={styles.thead}>
            {head[key] || key}
          </th>
        ))}
      </tr>
    </thead>
  );
};
const Row = ({record, currentItens}) => {
  const keys = Object.keys(record);
  return (
    <tr key={record.id}>
      {keys.map((key) => {
        {
          if (key === '_id') {
            return (
              <td key={key} className={styles.thead}>
                {record[key].$oid}
              </td>
            );
          } else {
            return (
              <td key={key} className={styles.thead}>
                {record[key]}
              </td>
            );
          }
        }
      })}
    </tr>
  );
};
const Table = ({data, head}) => {
  const keys = Object.keys(head);
  return (
    <div className={styles.App}>
      <div className={styles.Table__container}>
        <table className={styles.table}>
          <Head keys={keys} head={head} />
          <tbody className={styles.tbody}>
            {data.map((record) => (
              <Row record={record} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
