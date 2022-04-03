import { accounts } from '../utils/stores';

export const updateAccounts = async () => {
  const res = await fetch('http://localhost:8000/accounts');
  accounts.set(await res.json());
};

export const deleteAccountById = async (id) => {
  await fetch(`http://localhost:8000/accounts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    updateAccounts();
  });
};
