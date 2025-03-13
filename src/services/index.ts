import axios from "axios";
import { Cell, ResponseData, Row } from "../@types";

const GOOGLE_SHEETS_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;

export async function getProjectsDataFromSheet() {
  const URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_ID}/gviz/tq?tqx=out:json`;
  const response = await axios.get(URL);

  if (response.status !== 200) {
    throw new Error('Failed to fetch data from Google Sheets');
  }

  const data: ResponseData = JSON.parse(response.data.substr(47).slice(0, -2));
  const projects = data.table.rows.map((row: Row) => {
    const [img, title, description, githubURL, deployUrl] = row.c.map((cell: Cell) => cell.v);
    return { img, title, description, githubURL, deployUrl };
  }).slice(1);

  return projects;
}
