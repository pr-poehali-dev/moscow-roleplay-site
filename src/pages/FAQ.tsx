import Navigation from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Как начать играть на сервере?",
      answer:
        'Просто откройте Roblox, найдите наш сервер Moscow RolePlay и нажмите "Играть". После подключения выберите профессию и следуйте инструкциям на экране.',
    },
    {
      question: "Можно ли сменить профессию во время игры?",
      answer:
        "Да, вы можете сменить профессию, но для этого нужно обратиться к администрации сервера или использовать специальные игровые механики.",
    },
    {
      question: "Есть ли возрастные ограничения?",
      answer:
        "Рекомендуемый возраст для игры - от 12 лет. Мы поддерживаем дружелюбную атмосферу, подходящую для всех возрастов.",
    },
    {
      question: "Как получить больше денег в игре?",
      answer:
        "Деньги зарабатываются выполнением заданий по вашей профессии, участием в событиях и активной ролевой игрой.",
    },
    {
      question: "Что делать, если я нарушил правила?",
      answer:
        "Обратитесь к администрации сервера, объясните ситуацию. За первые нарушения обычно выносится предупреждение.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы о Moscow RolePlay
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-semibold text-gray-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
