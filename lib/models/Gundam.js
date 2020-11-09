const pool = require('../utils/pool');

module.exports = class Gundam {
  id;
  name;
  model_number;
  manufacturer;
  weight;
  thrust;
  reactor_output;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.model_number = row.model_number;
    this.manufacturer = row.manufacturer;
    this.weight = row.weight;
    this.thrust = row.thrust;
    this.reactor_output = row.reactor_output;
  }

  static async insert(gundam) {
    const { rows } = await pool.query(
      'INSERT into gundams (name, model_number, manufacturer, weight, thrust, reactor_output) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [gundam.name, gundam.model_number, gundam.manufacturer, gundam.weight, gundam.thrust, gundam.reactor_output]
    );

    return new Gundam(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM gundams'
    );

    return rows.map(row => new Gundam(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM gundams WHERE id=$1',
      [id]
    );

    if (!rows[0]) return null;
    else return new Gundam(rows[0]);
  }

  static async update(id, recipe) {
    const { rows } = await pool.query(
      `UPDATE gundams
      SET name=$1,
          model_number=$2,
          manufacturer=$3,
          weight=$4,
          thrust=$5,
          reactor_output=$6
      WHERE id = $6
      RETURNING *
      `,
      [gundam.name, gundam.model_number, gundam.manufacturer, gundam.weight, gundam.thrust, gundam.reactor_output, id]
    );

    return new Gundam(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM gundams WHERE id=$1 RETURNING *',
      [id]
    );

    return new Gundam(rows[0]);
  }
};