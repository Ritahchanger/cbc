def test_c_header(file_path):
    try:
        with open(file_path, 'r') as f:
            for line in f:
                if line.strip().startswith('#include'):
                    print("Header section contains preprocessor directives.")
                    return
        print("Header section does not contain any preprocessor directives.")
    except FileNotFoundError:
        print("File not found.")

test_c_header("example.c")



def tokenize(code):
    tokens = []
    current_token = ''
    in_string = False

    for char in code:
        if char in (' ', '\n', '\t'):
            if current_token:
                tokens.append(current_token)
                current_token = ''
        elif char in (';', '{', '}', '(', ')'):
            if current_token:
                tokens.append(current_token)
                current_token = ''
            tokens.append(char)
        elif char.isalnum() or char == '_':
            current_token += char
        elif char in ('=', '+', '-', '*', '/'):
            if current_token:
                tokens.append(current_token)
                current_token = ''
            tokens.append(char)
        elif char == '"':
            if in_string:
                tokens.append(current_token)
                current_token = ''
            in_string = not in_string
        elif char == ' ':
            continue
        else:
            current_token += char

    if current_token:
        tokens.append(current_token)

    return tokens

code = """
int main() {
    int a = 10;
    float b = 5.5;
    char c = 'x';
    if (a > 5) {
        b = a * b;
    } else {
        b = a / b;
    }
    return 0;
}
"""

tokens = tokenize(code)
print(tokens)
