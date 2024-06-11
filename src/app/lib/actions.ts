import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export async function createEmployee(
  event: FormEvent<HTMLFormElement>,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3001/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to create employee');
    }

    router.push('/employees');
  } catch (error) {
    console.error(error);
  }
}

export async function updateEmployee(
  event: FormEvent<HTMLFormElement>,
  id: number,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`http://localhost:3001/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to update employee');
    }

    router.push('/employees');
  } catch (error) {
    console.error(error);
  }
}

export async function deleteEmployee(id: number) {
  try {
    const response = await fetch(`http://localhost:3001/employees/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete employee');
    }

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}
