import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RolesSection = () => {
  const roles = [
    {
      title: "Полиция",
      description:
        "Охраняй порядок в городе, расследуй преступления и защищай граждан",
      icon: "Shield",
      gradient: "police-gradient",
      features: [
        "Патрулирование города",
        "Расследования",
        "Задержание нарушителей",
      ],
    },
    {
      title: "ЦОДД",
      description: "Управляй дорожным движением и следи за соблюдением ПДД",
      icon: "Car",
      gradient: "traffic-gradient",
      features: ["Контроль ПДД", "Эвакуация авто", "Дорожные работы"],
    },
    {
      title: "Медики",
      description: "Спасай жизни, оказывай первую помощь и работай в больнице",
      icon: "Heart",
      gradient: "medical-gradient",
      features: ["Скорая помощь", "Лечение в больнице", "Операции"],
    },
    {
      title: "Пожарные",
      description:
        "Тушите пожары, спасайте людей и ликвидируй чрезвычайные ситуации",
      icon: "Flame",
      gradient: "fire-gradient",
      features: [
        "Тушение пожаров",
        "Спасательные операции",
        "Аварийные службы",
      ],
    },
    {
      title: "Таксисты",
      description: "Перевози пассажиров по городу и зарабатывай на жизнь",
      icon: "Taxi",
      gradient: "taxi-gradient",
      features: ["Перевозка пассажиров", "Изучение города", "Свободный график"],
    },
    {
      title: "Гражданские",
      description:
        "Живи обычной жизнью, работай, отдыхай и взаимодействуй с другими",
      icon: "User",
      gradient: "civilian-gradient",
      features: [
        "Свободная игра",
        "Различные работы",
        "Социальное взаимодействие",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-gray-900">
            Выбери свою роль
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждая профессия открывает уникальные возможности и игровой опыт.
            Стань тем, кем всегда мечтал быть!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card
              key={role.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative">
                <div
                  className={`absolute inset-0 ${role.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <div
                  className={`w-16 h-16 ${role.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative`}
                >
                  <Icon
                    name={role.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="font-montserrat font-bold text-2xl text-gray-900 relative">
                  {role.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base relative">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2">
                  {role.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
