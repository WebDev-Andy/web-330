/*
; File: http-client.js
; Author: Andrew Britt
; Date: 11 July 2022
; Description: JavaScript for Whatabooks2 assignment
; Reference: Week-8 pdf web-330
; Date accessed: 11 July 2022
*/

export class HttpClient 
{
    async get(url, params = "") 
    {
        // instantiates a new URL object
        let urlObj = new URL(url);

        // instantiates a new URLSearchParams object
        let paramObj = new URLSearchParams(params);
        
        // assigning paramObj to url.search property
        urlObj.search = paramObj;

        // creates object literal
        const res = await fetch(urlObj.toString(), 
        { 
            method: "GET",
        })

        // return res object literal as JSON
        return res.json();
    }
}