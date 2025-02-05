import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT *, event_time AT TIME ZONE 'UTC' AT TIME ZONE 'America/New_York' AS event_time_ny
         FROM events 
         WHERE event_time > (NOW() AT TIME ZONE 'America/New_York') 
         ORDER BY event_time_ny ASC 
         LIMIT 3;`
    );

    client.release();

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(
      JSON.stringify({ error: "Database connection failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
