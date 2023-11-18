import mysql from 'mysql'
import express from 'express'

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "estacion",
});
