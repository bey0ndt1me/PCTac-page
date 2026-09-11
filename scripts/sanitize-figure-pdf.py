"""Strip identity metadata from website copies; never modify manuscript sources."""
import sys
from pathlib import Path
from pypdf import PdfReader, PdfWriter

path = Path(sys.argv[1])
reader = PdfReader(path)
writer = PdfWriter(clone_from=reader)
writer.metadata = None
if '/Metadata' in writer.root_object:
    del writer.root_object['/Metadata']
temporary = path.with_suffix('.sanitized.pdf')
with temporary.open('wb') as output:
    writer.write(output)
writer.close()
temporary.replace(path)
