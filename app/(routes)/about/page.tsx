import getData from '@/app/firebase/getData';
import { DocumentData } from 'firebase/firestore';
import TestSuspense from '@/app/components/testSuspense';
import { Suspense } from 'react';
import ClientComponent from '@/app/components/clientComponent';

type user = {
  id: string;
  profissao: string;
  cidade: string;
  nome: string;
  admin: boolean;
  email: string;
};

export const metadata = {
  title: 'About',
};

const About = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 2000));

  const usersData: DocumentData = await getData('users');
  const getUsers = usersData.result;

  const renderGetUsers = getUsers.map((user: user) => {
    return (
      <div
        key={user.id}
        className="w-1/4 mx-auto m-5 p-5 dark:bg-slate-800 dark:text-slate-200"
      >
        <p>{user.nome}</p>
        <p>{user.email}</p>
        <p>{user.profissao}</p>
        <p>{user.cidade}</p>
        <p>{user.admin}</p>
      </div>
    );
  });
  return (
    <div>
      <Suspense fallback={<p>Carregando...</p>}>
        <TestSuspense />
      </Suspense>
      {renderGetUsers}
    </div>
  );
};

export default About;
