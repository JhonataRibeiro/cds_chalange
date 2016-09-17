/**
 * Created by felipecm on 17/12/14.
 */

module.exports =
{
        server: {
            options: {
                keepalive:true,
                hostname:'localhost',
                port: 8001,
                open: {
                    target: 'http://localhost:8000'
                }
            }
        }
    };