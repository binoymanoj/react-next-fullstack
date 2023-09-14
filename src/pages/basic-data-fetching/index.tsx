import Breadcrumbs from '@/components/common/breadcrumbs';
import React from 'react'

interface User {
    id: number;
    name: string;
}

const JsonDataFetch =  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        // cache: "no-cache",
        // next: { revalidate: 10 },
      });
      const users: User[] = await res.json();
     
  return (
    <>
    <Breadcrumbs />
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default JsonDataFetch