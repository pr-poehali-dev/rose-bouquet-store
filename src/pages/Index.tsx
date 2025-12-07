import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [selectedBouquet, setSelectedBouquet] = useState<number | null>(null);

  const bouquets = [
    {
      id: 1,
      count: 1,
      name: 'Одна роза',
      price: '450₽',
      description: 'Элегантный жест внимания',
      features: ['Свежая роза премиум-класса', 'Изысканная упаковка', 'Персональная открытка'],
      image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800&q=80'
    },
    {
      id: 2,
      count: 101,
      name: '101 роза',
      price: '19 900₽',
      description: 'Роскошное признание в любви',
      features: ['101 роза эксклюзивного качества', 'Премиальная упаковка', 'Доставка в течение 2 часов', 'Фото букета перед отправкой'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80'
    },
    {
      id: 3,
      count: 1001,
      name: '1001 роза',
      price: '149 000₽',
      description: 'Незабываемое впечатление',
      features: ['1001 роза высшего качества', 'Эксклюзивное оформление', 'VIP доставка', 'Фотограф в подарок', 'Персональный флорист'],
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80'
    }
  ];

  const portfolio = [
    { id: 1, title: 'Романтическая композиция', occasion: 'Свадьба' },
    { id: 2, title: 'Королевский букет', occasion: 'Юбилей' },
    { id: 3, title: 'Нежность в красном', occasion: 'Признание' },
    { id: 4, title: 'Премиум коллекция', occasion: 'Годовщина' },
    { id: 5, title: 'Классическое совершенство', occasion: 'День рождения' },
    { id: 6, title: 'Изысканная элегантность', occasion: 'Сюрприз' }
  ];

  const reviews = [
    { name: 'Анна Сергеева', rating: 5, text: 'Невероятные розы! Свежие, ароматные, простояли больше двух недель. Упаковка шикарная.', date: '15 ноября 2024' },
    { name: 'Дмитрий Волков', rating: 5, text: 'Заказывал 101 розу для жены. Доставили точно в срок, букет превзошёл все ожидания!', date: '8 ноября 2024' },
    { name: 'Екатерина Л.', rating: 5, text: 'Премиальное качество во всём - от роз до обслуживания. Рекомендую!', date: '2 ноября 2024' }
  ];

  const handleOrder = (bouquetId: number) => {
    setSelectedBouquet(bouquetId);
    const element = document.getElementById('order-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заказ принят! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Rose Luxe</h1>
          <div className="hidden md:flex gap-8">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <Badge className="mb-6 bg-secondary text-secondary-foreground px-6 py-2 text-sm font-medium">
            Премиальная флористика
          </Badge>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Роскошь в каждом лепестке
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Создаём незабываемые моменты с помощью изысканных композиций из роз высшего качества
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => handleOrder(2)}>
              Заказать букет
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <a href="#portfolio">Посмотреть работы</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Наши коллекции</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальный букет для особенного момента</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bouquets.map((bouquet, index) => (
              <Card 
                key={bouquet.id} 
                className="relative hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {bouquet.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground z-10">
                    Популярное
                  </Badge>
                )}
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={bouquet.image} 
                    alt={bouquet.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl font-bold text-primary mb-2">{bouquet.count}</div>
                  <CardTitle className="text-3xl mb-2">{bouquet.name}</CardTitle>
                  <CardDescription className="text-base">{bouquet.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4 border-y border-border">
                    <span className="text-4xl font-bold text-primary">{bouquet.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {bouquet.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 mt-4" 
                    size="lg"
                    onClick={() => handleOrder(bouquet.id)}
                  >
                    Заказать онлайн
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Реальные букеты и примеры нашего мастерства</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolio.map((item) => (
              <div 
                key={item.id} 
                className="group relative aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-muted-foreground/30" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="mb-2 bg-secondary text-secondary-foreground">{item.occasion}</Badge>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">О нас</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl font-semibold text-primary block mb-4">Rose Luxe</span>
                Мы создаём не просто букеты — мы дарим эмоции. Каждая роза отбирается вручную нашими флористами с многолетним опытом.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Работаем напрямую с лучшими поставщиками из Эквадора и Кении, что гарантирует свежесть и долговечность каждого цветка.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">счастливых клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">качество</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Icon name="Flower2" size={120} className="text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Доставка</h2>
            <p className="text-xl text-muted-foreground">Оперативно и с заботой о каждом букете</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Москва</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Доставка в течение 2-4 часов</p>
                <p className="text-2xl font-bold text-primary">Бесплатно</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Московская область</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Доставка в течение 4-6 часов</p>
                <p className="text-2xl font-bold text-primary">500₽</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Globe" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Другие города</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Курьерская служба</p>
                <p className="text-2xl font-bold text-primary">Расчёт</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 p-8 bg-muted/30 rounded-lg">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Гарантия свежести</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Все букеты доставляются в специальных термо-боксах с контролем температуры. 
                  Фотография букета перед отправкой отправляется вам на почту или в мессенджер.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Отзывы</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-2xl border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl mb-2">Оформить заказ</CardTitle>
              <CardDescription className="text-base">
                Заполните форму, и мы свяжемся с вами для подтверждения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Выберите букет</label>
                  <select 
                    className="w-full border border-input rounded-md px-4 py-3 bg-background"
                    value={selectedBouquet || ''}
                    onChange={(e) => setSelectedBouquet(Number(e.target.value))}
                    required
                  >
                    <option value="">Выберите вариант</option>
                    {bouquets.map(b => (
                      <option key={b.id} value={b.id}>{b.name} — {b.price}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="example@mail.ru" required />
                </div>
                <div className="space-y-4 p-6 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary">Детали доставки</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Адрес доставки</label>
                    <Input placeholder="Улица" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Дом</label>
                      <Input placeholder="№" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Квартира/Офис</label>
                      <Input placeholder="№" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Дата доставки</label>
                      <Input type="date" required min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Время доставки</label>
                      <Input type="time" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Подъезд, этаж, домофон</label>
                    <Input placeholder="Подробности для курьера" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Комментарий к заказу</label>
                  <Textarea placeholder="Особые пожелания, текст для открытки" rows={3} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                  Оформить заказ с онлайн-оплатой
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  После отправки формы с вами свяжется менеджер для подтверждения и оплаты
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 22:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@roseluxe.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес салона</h3>
                  <p className="text-muted-foreground">г. Москва, Кутузовский проспект, 48</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Icon name="Facebook" size={24} />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Icon name="Send" size={24} />
                </Button>
              </div>
              <div className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Подписывайтесь на наши социальные сети, чтобы быть в курсе новых коллекций, 
                  специальных предложений и флористических тенденций.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Rose Luxe</h2>
          <p className="mb-6 text-primary-foreground/80">Премиальная флористика с 2010 года</p>
          <div className="text-sm text-primary-foreground/60">
            © 2024 Rose Luxe. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;