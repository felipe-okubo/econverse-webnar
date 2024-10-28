export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { nome, email, phone, enterprise, role } = req.body;

  const RD_API_KEY = process.env.RD_API_KEY;
  const eco_appkey = process.env.eco_appkey;
  const eco_apptoken = process.env.eco_apptoken;

  try {
    // Envie os dados para a API de Leads da RD Station

    const response = await fetch(
      // `https://app.tarefy.com/nodeapi/event/econverse`,
      // `https://api.rd.services/platform/contacts`,
      `https://econverse.vtexcommercestable.com.br/api/dataentities/WB/documents`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VTEX-API-AppKey": `${eco_appkey}`,
          "X-VTEX-API-AppToken": `${eco_apptoken}`,
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          // phone: phone,
          // enterprise: enterprise,
          // role: role,
          //   available_for_mailing: true,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao enviar os dados para a RD Station");
    }

    return res
      .status(200)
      .json({ message: "Lead enviado com sucesso para a RD Station" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao processar o formulário" });
  }

}
