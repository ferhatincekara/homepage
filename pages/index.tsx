import type { NextPage } from 'next';
import Image from 'next/image';

import Link from '@/components/Link';
import { META } from '@/lib/helper';

const Home: NextPage = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto px-5">
      <div className="flex w-full">
        <div className="block flex-auto w-full max-w-full">
          <Image
            src="https://s.gravatar.com/avatar/4226fe7661a9fba579db19891aa1dd62?s=512"
            alt="Ferhat incekara"
            width={96}
            height={96}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex w-full pt-20 pb-10">
        <div className="block flex-auto w-full max-w-full">
          <h2 className="text-[38px] leading-none font-extrabold">
            Merhaba, Ben Ferhat 👋
            <br />
            <span className="block font-medium mt-2">Tekirdağ’da yaşayan bir Geliştiriciyim.</span>
          </h2>
        </div>
      </div>

      <div className="flex w-full pb-16">
        <div className="block flex-auto w-full max-w-full">
          <p className="text-2xl leading-9 text-zinc-400 mb-8">
            Şu anda Frontend Developer olarak çalışmaktayım.
          </p>
          <p className="text-2xl leading-9 text-zinc-400">
            Frontend teknolojilerle uğraşan karmaşık arayüzleri için basit ve zarif yapılar
            tasarlama konusunda büyük bir tutkuya sahip bir geliştiriciyim. İstersen beni{' '}
            <Link href={META.social.instagram} className="text-[#e1306c]" blank>
              Instagram
            </Link>
            'da takip edebilirsin ya da yaptığım işlere{' '}
            <Link href={META.social.github} className="text-[#6e5494]" blank>
              GitHub
            </Link>{' '}
            üzerinden bakabilirsin. Senin işin buysa ben de{' '}
            <Link href={META.social.linkedin} className="text-[#0976b4]" blank>
              LinkedIn
            </Link>
            'deyim.
          </p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="block flex-auto w-full max-w-full">
          <Link
            href={`mailto:${META.author.email}`}
            className="text-2xl leading-9 text-[#50bcfc] hover:text-[#50bcfc]/70"
            blank={false}
          >
            Bana E-Posta Gönder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
