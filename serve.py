#!/usr/bin/env python3
"""No-cache HTTP server — prevents browser from caching JS/CSS files."""
import http.server, os

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        print(f"  {self.address_string()} — {format % args}")

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = http.server.HTTPServer(('', 3000), NoCacheHandler)
    print('🚀 No-cache server running at http://localhost:3000')
    print('   Press Ctrl+C to stop.')
    server.serve_forever()
