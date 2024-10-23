export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { nome, email, mensagem } = req.body;
  
      // Faça algo com os dados captados (armazenar em um banco de dados, enviar por email, etc.)
  
      return res.status(200).json({ message: 'Dados captados com sucesso!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  