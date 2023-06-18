import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import { getTransactions } from '../../store/slices/transactionsSlice';
import styles from './TransactionsPage.module.sass';

function TransansactionsPage ({
  lastName,
  firstName,
  transactions,
  isFetching,
  error,
  get,
}) {
  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.transactionsContainer}>
        <h3 className={styles.header}>
          Hi, dear {firstName} {lastName}!
        </h3>
        <table>
          <caption className={styles.caption}>Finance Operations</caption>
          <thead>
            <tr>
              <th key={1}>Amount</th>
              <th key={2}>Operation Type</th>
              <th key={3}>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id}>
                <td>{t.amount}</td>
                <td>{t.operationType}</td>
                <td>{format(new Date(t.createdAt), ' dd.MM.yyyy HH:mm')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

const mapStateToProps = ({ transactionsStore }) => transactionsStore;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getTransactions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransansactionsPage);
