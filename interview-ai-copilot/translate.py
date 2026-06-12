from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")

print("API carregada:", api_key[:15], "...")

client = OpenAI(api_key=api_key)

texto = input("Digite a frase em inglês: ")

response = client.responses.create(
    model="gpt-5.5",
    input=f"""
Traduza para português e explique a intenção da pergunta:

{texto}
"""
)

print("\n--- RESULTADO ---\n")
print(response.output_text)