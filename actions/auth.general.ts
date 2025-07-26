import { IFormInputs } from '@/types';

const registerUser = async ({ name, email, password }: IFormInputs) => {
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Registration failed');
  }

  return data;
};

const loginUser = async ({email, password}: IFormInputs) => {
  const res = await fetch('/api/login', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  })

  const data = await res.json();

  if (!res.ok) {
    throw new Error (data.error || "Login failed")
  }

  return data
}

export { registerUser, loginUser };
