import hashlib
def createHash(password):
    sha256 = hashlib.sha256()
    sha256.update(password.encode())
    return sha256.hexdigest()

if __name__ == "__main__":
    createHash(password)
	