import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const ruleCategories = [
    {
      title: "Общие правила",
      icon: "BookOpen",
      color: "primary",
      rules: [
        "Будьте вежливы с другими игроками",
        "Запрещено использование читов и багов",
        "Не спамьте в чате",
        "Соблюдайте ролевую игру",
      ],
    },
    {
      title: "Правила для Полиции",
      icon: "Shield",
      color: "police",
      rules: [
        "Патрулируйте назначенный участок",
        "Соблюдайте протокол задержания",
        "Ведите документооборот",
        "Сотрудничайте с другими службами",
      ],
    },
    {
      title: "Правила для Медиков",
      icon: "Heart",
      color: "medical",
      rules: [
        "Оказывайте помощь всем без исключения",
        "Следуйте медицинским протоколам",
        "Ведите карты пациентов",
        "Работайте в команде",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              Правила сервера
            </h1>
            <p className="text-xl text-gray-600">
              Соблюдение правил обеспечивает комфортную игру для всех
            </p>
          </div>

          <div className="grid gap-8">
            {ruleCategories.map((category, index) => (
              <Card
                key={category.title}
                className="shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 bg-${category.color}/10 rounded-lg flex items-center justify-center`}
                    >
                      <Icon
                        name={category.icon as any}
                        size={24}
                        className={`text-${category.color}`}
                      />
                    </div>
                    <span className="font-montserrat">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
