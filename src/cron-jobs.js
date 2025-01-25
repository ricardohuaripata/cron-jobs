import cron from "node-cron";
import axios from "axios";

import dotenv from "dotenv";
dotenv.config();

const setupCronJobs = () => {
  scheduleCronJobSupabaseApolloRefresh();
};

function scheduleCronJobSupabaseApolloRefresh() {
  cron.schedule("0 0 */5 * *", async () => {
    const date = new Date();

    try {
      const response = await axios.get(
        "https://oqsxxvzetmfgnzmygzvu.supabase.co/rest/v1/projects",
        {
          headers: {
            Apikey: process.env.SUPABASE_KEY,
          },
        }
      );
      console.log("Cron job successful at " + date.toISOString());
    } catch (error) {
      console.error("Cron job error at " + date.toISOString());
    }
  });
}

export default setupCronJobs;
