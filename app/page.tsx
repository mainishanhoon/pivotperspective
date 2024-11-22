'use client';

import { Button } from '@/components/ui/button';
import { Armchair, UsersRound } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Lights } from '@/components/Lights';
import { Link as Scroll } from 'react-scroll/modules';

import * as React from 'react';

export default function Hero() {
  return (
    <>
      <header className="absolute top-0 h-[80px] bg-transparent"></header>
      <section className="flex h-dvh w-screen items-center justify-center bg-gradient-to-b">
        <div className={'relative h-full w-full px-4 bg-grid-white/[0.03]'}>
          <div
            className={
              'relative z-[1] flex h-full w-full animate-moveUp flex-col items-start justify-center sm:items-center'
            }
          >
            <div className="max-w-2xl text-center">
              <div className="flex justify-center">
                <Image
                  alt="Logo"
                  className="object-cover text-center"
                  src="/logo.webp"
                  width={125}
                  height={125}
                />
              </div>
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-7xl">
                  Experience Ideas
                  <br /> Worth Spreading
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="font-mont text-lg text-muted-foreground">
                  Join us for an empowering event that bridges the gap between
                  aspiring students and accomplished achievers. Hear inspiring
                  stories, gain valuable insights, and fuel your journey to
                  success.
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Link href="/form">
                  <Button size="lg" variant="ringHover" className="text-white">
                    <Armchair size={30} strokeWidth={2} className="mr-2" />
                    Count me In
                  </Button>
                </Link>
                <Scroll to="guests" smooth={true} duration={1000}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="p-5 text-white"
                  >
                    <UsersRound
                      size={30}
                      strokeWidth={2}
                      className="mr-2 p-0.5"
                    />
                    See our Guests
                  </Button>
                </Scroll>
              </div>
            </div>
          </div>
          <div
            className={
              'absolute bottom-0 left-0 z-0 h-full w-full animate-appear opacity-0'
            }
          >
            <Lights />
          </div>
        </div>
      </section>

      <section
        id="guests"
        className="flex min-h-dvh w-screen items-center justify-center bg-gradient-to-b"
      >
        <div
          className={'relative min-h-[100vh] w-full px-4 bg-grid-white/[0.03]'}
        >
          <p className="my-[50px] text-center text-6xl">Our Guests</p>
          <div id="cards" className="m-auto flex w-[70vw] flex-wrap gap-[20px]">
            {/* Card */}
            <div className="m-auto mt-14 flex w-[85vw] flex-col items-center gap-[10px] rounded-3xl border-2 border-slate-500 bg-gradient-to-br from-[#6dbbff75] to-[#6dbbff05] p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] hover:from-blue-500 hover:to-purple-700 md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Vishwa Mohan</p>
                <h4 className="text-large font-bold">Founder : Aimers.Ai</h4>
                <small className="text-default-500"></small>
              </div>
              <div className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="/Vishwa.jpg"
                  width={400}
                  height={250}
                />
              </div>
            </div>

            {/* Card */}
            <div className="m-auto mt-14 flex w-[85vw] flex-col items-center gap-[10px] rounded-3xl border-2 border-slate-500 bg-gradient-to-br from-[#6dbbff75] to-[#6dbbff05] p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] hover:from-blue-500 hover:to-purple-700 md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Crazy Deep</p>
                <h4 className="text-large font-bold">Youtuber</h4>
                <small className="text-default-500"></small>
              </div>
              <div className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="mt-16 rounded-xl bg-white object-cover"
                  src="/Crazydeep.png"
                  width={400}
                  height={250}
                />
              </div>
            </div>
            {/* Card */}
            <div className="m-auto mt-14 flex w-[85vw] flex-col items-center gap-[10px] rounded-3xl border-2 border-slate-500 bg-gradient-to-br from-[#6dbbff75] to-[#6dbbff05] p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] hover:from-blue-500 hover:to-purple-700 md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Jayesh Ranjan</p>
                <h4 className="text-large font-bold">
                  Businessmen and Founder Virality Studios
                </h4>
                <small className="text-default-500"></small>
              </div>
              <div className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="/Jayesh.png"
                  width={400}
                  height={250}
                />
              </div>
            </div>

            {/* Card */}
            <div className="m-auto mt-14 flex w-[85vw] flex-col items-center gap-[10px] rounded-3xl border-2 border-slate-500 bg-gradient-to-br from-[#6dbbff75] to-[#6dbbff05] p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] hover:from-blue-500 hover:to-purple-700 md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Shivam Kakkar</p>
                <h4 className="text-large font-bold">Actor</h4>
                <small className="text-default-500">
                  Shivam Kakar is an actor from New Delhi, India, known for his
                  roles in Flames (2018), Indoo Ki Jawani (2020), and Aspirants
                  (2021).
                  <br />
                  <b> Ad Gully Digixx&apos;22 Young Gun Award Winner</b> Shivam
                  Kakkar won the Ad Gully Digixx&apos;22 Young Gun Award, which
                  recognizes the best young individual in the agency and
                  marketing fields between the ages of 24 and 29.
                  <br />
                  <b> Co-Founder of Xero Degrees Cafe Private Limited </b>Shivam
                  Kakkar is the co-founder of Xero Degrees Cafe Private Limited.
                </small>
              </div>
              <div className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="mt-2 rounded-xl object-cover"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={400}
                  height={250}
                />
              </div>
            </div>
            {/* Card */}
            <div className="m-auto mt-14 flex w-[85vw] flex-col items-center gap-[10px] rounded-3xl border-2 border-slate-500 bg-gradient-to-br from-[#6dbbff75] to-[#6dbbff05] p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] hover:from-blue-500 hover:to-purple-700 md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Samrat Bhai</p>
                <h4 className="text-large font-bold">Actor</h4>
                <small className="text-default-500"></small>
              </div>
              <div className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            {/* Card */}
            <div className="m-auto mt-14 flex w-[85vw] flex-col items-center gap-[10px] rounded-3xl border-2 border-slate-500 bg-gradient-to-br from-[#6dbbff75] to-[#6dbbff05] p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] hover:from-blue-500 hover:to-purple-700 md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Tanya Mittal</p>
                <h4 className="text-large font-bold">
                  Businesswomen and Influncer with 1.2M followers
                </h4>
                <small className="text-default-500"></small>
              </div>
              <div className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={400}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-[120px] h-16">
        <div className="flex items-center justify-around">
          <Image
            alt="Adbrotisers"
            src="/adbrotisers.webp"
            width={200}
            height={50}
          />
          <div className="">
            <p className="font-bold tracking-wide">
              Saransh Tiwari: 7869770020
            </p>
            <p className="font-bold tracking-wider">
              Shreyansh Saxena: 9479966175
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
