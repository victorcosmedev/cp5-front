import { NextResponse } from "next/server";

export async function GET(){
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=guT7aJwrahSU6QNhxyo6peHavdMJD8DXL0eHcUSu');
    const data = await response.json();
    return NextResponse.json(data);
}



// https://api.nasa.gov/planetary/apod?api_key=guT7aJwrahSU6QNhxyo6peHavdMJD8DXL0eHcUSu&date=2002-06-11
// https://api.nasa.gov/planetary/apod?api_key=guT7aJwrahSU6QNhxyo6peHavdMJD8DXL0eHcUSu&date=1995-06-16