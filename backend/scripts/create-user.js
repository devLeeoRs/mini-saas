const bcrypt = require('bcryptjs');
const appDb = require('../src/config/appDatabase');

async function main() {
  const [username, password, role] = process.argv.slice(2);
  if (!username || !password || !role) {
    console.log('Uso: node scripts/create-user.js <username> <password> <admin|gerente|funcionario>');
    process.exit(1);
  }

  if (!['admin', 'gerente', 'funcionario'].includes(role)) {
    console.log('Role inválida. Use: admin | gerente | funcionario');
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 10);
  await appDb.query(
    'INSERT INTO app_users (username, password_hash, role) VALUES ($1, $2, $3) ON CONFLICT (username) DO UPDATE SET password_hash = EXCLUDED.password_hash, role = EXCLUDED.role, active = true',
    [username, hash, role]
  );
  console.log('OK');
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
