# Walkthrough of Bandit OverTheWire

The OverTheWird bandit was quite a challenging and interesting task to me. The curiosity inside me to find the password of the next level and to decode the code knew no limits.

---

## Assignment 00
To list the available files, use `ls`.
To read and show the contents of the file, use `cat`.

## Task 01: 
-  To locate the single file with the name `-`, use `ls`.
-  Its contents were shown using `./-`.

## Task 02: 
-  To get the new password, use `cat "spaces in this filename"`.

## Task 03: 
-  Used `cd` to change the directory to `inhere`.
- `ls -la` was used to list hidden files. I located the `.hidden` file and used `cat` to see its contents.

## Task 04: 
-  Used `cd` to change the directory to `inhere`.
-  To identify file types, use `file./*`. used `cat` to display the ASCII file `file7`.

## Task 05: 
-  Used `cd` to change the directory to `inhere`.
-  Used `file */{.,}* | grep "ASCII text" | grep -v ', with very long lines'` to find ASCII text files without lengthy lines.  
-  The file of 1033 bytes was displayed using `cat`.

## Task 06: 
-  Used the `find` command to locate a file belonging to `bandit7`: `find. -type f -size 33c -user bandit7 -group bandit6 2>/dev/null`.  
-  Used `cat` to display its contents.

## Task 07: 
-  Used `du -b data.txt` to determine the file size.
-  `cat data.txt | grep "millionth"` was used to search for the word "millionth."

## Task 08: 
-  To discover unique terms, use `sort` and `uniq.
-  `sort filename.txt | uniq -u`.

## Task 09: 
-  Used `strings filename.txt | grep "=="` to find the secret password.

## Task 10: 
-  Used `base64 -d data.txt` to decode the Base64 contents of `data.txt`.

## Task 11: 
-  Used `cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'` to decode ROT13-encoded contents.

## Task 12: 
-  Used `xd -r data.txt` to reverse hexdump.

## Task 13: 
-  Used `gzip -d filename` to decode a gzip file.

## Task 14: 
-  Used `bzip2 -d filename` to decode a bzip2 file.

## Task 15: 
-  Used `tar -xvf filename.tar.gz` to extract the tar.gz file.

## Task 16: 
-  Extracted a multi-compressed file using the following commands: `gzip -d`, `bzip2-d`, `tar -xvf`.

## Task 17: 
-  Locate the private SSH key, use `cat` to copy it, and log in with `ssh -i private_key bandit17@host`.

## Task 18: 
-  Used `diff file1 file2` to compare two files for differences.

## Task 19: 
-  Used `xxd -r data.txt` to reverse the hexadecimal format.

## Task 20: 
-  To recover the password, a setuid binary was executed using `./binary`.

## Task 21: 
-  Used `strings binary_name | grep 'password'` to extract the password from the ELF binary.

## Task 22: 
-  Use `netstat -tuln` or `lsof -i` to locate a listening port.
- <nc localhost port` was used to connect to it.

## Task 23: 
-  Locate the RSA key and use `ssh -i private_key bandit23@host` to log in.

---
