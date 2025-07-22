import db from './authenticate-user';

export function getTrainings() {
  const stmt = db.prepare('SELECT * FROM trainings');
  return stmt.all();
}
