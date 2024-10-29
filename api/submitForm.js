export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { nome, email, phone, enterprise, role } = req.body;

  const RD_API_KEY = process.env.RD_API_KEY;
  const eco_appkey = process.env.eco_appkey;
  const eco_apptoken = process.env.eco_apptoken;
  const api_key = process.env.eco_apptoken;

  try {
    const response = await fetch(
      // `https://app.tarefy.com/nodeapi/event/econverse`,
      // `https://econverse.vtexcommercestable.com.br/api/dataentities/WB/documents`,
      // `https://api.rd.services/platform/contacts`,
      `https://api.rd.services/platform/conversions?api_key=${api_key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_type: "CONVERSION",
          event_family: "CDP",
          payload: {
            name: nome,
            email: email,
            personal_phone: phone,
            company_name: enterprise,
            job_title: role,
            tags: ["Evento Econverce Webinar"],
            conversion_identifier: "Econverse Webinar",
          }
        })
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
