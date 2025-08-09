<template>
  <header
    class="sticky z-30 top-0 w-full flex items-center justify-center h-(--landing-page-header) bg-gray-100"
  >
    <div class="app-container flex items-center justify-between gap-3">
      <nuxt-link href="/#home" class="text-primary text-xl font-semibold">
        Tajamu
      </nuxt-link>
      <button
        type="button"
        class="max-md:flex hidden items-center justify-center text-3xl w-12 h-10 bg-gray-200 rounded-sm"
        @click="isOpenMobileMenu = !isOpenMobileMenu"
      >
        <Icon v-if="!isOpenMobileMenu" name="hugeicons:menu-11" />
        <Icon v-if="isOpenMobileMenu" name="iconamoon:close-light" />
      </button>
      <nav
        class="flex items-center justify-center gap-2 max-md:fixed max-md:top-(--landing-page-header) transition-all max-md:left-0 max-md:w-full max-md:h-[calc(100vh-(--landing-page-header))] max-md:bg-gray-50 max-md:flex-col max-md:items-start max-md:p-3"
        :class="
          clsx(
            !isOpenMobileMenu &&
              'max-md:opacity-0 max-md:pointer-events-none max-md:-translate-y-4 max-md:scale-99'
          )
        "
      >
        <nuxt-link
          href="/#home"
          class="min-w-28 px-2 py-1.5 text-center rounded-full text-lg text-gray-700 font-semibold capitalize transition-colors hover:bg-gray-200 max-md:rounded-sm max-md:w-full max-md:text-start"
          :class="
            clsx(
              (currentSection === '#' ||
                currentSection === '#home' ||
                route.hash === '#' ||
                route.hash === '#home') &&
                'bg-gray-200 text-primary'
            )
          "
          >home</nuxt-link
        >
        <nuxt-link
          href="/#features"
          class="min-w-28 px-2 py-1.5 text-center rounded-full text-lg text-gray-700 font-semibold capitalize transition-colors hover:bg-gray-200 max-md:rounded-sm max-md:w-full max-md:text-start"
          :class="
            clsx(
              (route.hash.includes('features') ||
                currentSection.includes('features')) &&
                'bg-gray-200 text-primary'
            )
          "
          >features</nuxt-link
        >
        <nuxt-link
          href="/#prices"
          class="min-w-28 px-2 py-1.5 text-center rounded-full text-lg text-gray-700 font-semibold capitalize transition-colors hover:bg-gray-200 max-md:rounded-sm max-md:w-full max-md:text-start"
          :class="
            clsx(
              (route.hash.includes('prices') ||
                currentSection.includes('prices')) &&
                'bg-gray-200 text-primary'
            )
          "
          >prices</nuxt-link
        >
        <nuxt-link
          href="/#how-it-works"
          class="min-w-28 px-2 py-1.5 text-center rounded-full text-lg text-gray-700 font-semibold capitalize transition-colors hover:bg-gray-200 max-md:rounded-sm max-md:w-full max-md:text-start"
          :class="
            clsx(
              (route.hash.includes('how-it-works') ||
                currentSection.includes('how-it-works')) &&
                'bg-gray-200 text-primary'
            )
          "
          >how it works</nuxt-link
        >
        <nuxt-link
          href="/register"
          class="min-w-40 max-md:flex hidden items-center justify-center bg-primary py-2 rounded text-white text-base capitalize hover:bg-primary/80"
          >try now free</nuxt-link
        >
      </nav>
      <div class="hidden md:block">
        <nuxt-link
          href="/register"
          class="min-w-40 flex items-center justify-center bg-primary py-2 rounded text-white text-base capitalize hover:bg-primary/80"
          >try now free</nuxt-link
        >
      </div>
    </div>
  </header>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Hero Section -->
    <section
      id="home"
      class="relative min-h-[90vh] flex flex-col items-center justify-center"
    >
      <video
        src="/videos/hero.mp4"
        type="video/mp4"
        autoplay
        loop
        muted
        playsinline
        preload="metadata"
        class="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <!-- video overlay -->
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/30 to-gray-900/60"
      >
        <div
          class="app-container h-full flex flex-col items-center justify-center gap-1 py-4 md:py-8 lg:py-32"
        >
          <h1
            class="text-center !text-4xl lg:!text-8xl font-semibold uppercase text-primary"
          >
            Tajamu
          </h1>
          <p
            class="max-w-full md:max-w-9/12 lg:max-w-2/3 text-center text-sm lg:text-xl font-medium text-white mt-5"
          >
            Tajamu is a platform that helps you create, manage, and attend
            events with ease. Experience seamless event planning, powerful
            management tools, and an engaging attendee experience all in one
            place. Join thousands of successful event organizers today.
          </p>
          <div class="flex item-center justify-center mt-8">
            <nuxt-link
              href="/login"
              class="px-5 py-2 lg:py-3 rounded-md text-center shadow-lg bg-primary"
            >
              <p class="min-w-44 text-white text-sm lg:text-lg">
                Let's get started
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-4 bg-white">
      <div class="app-container mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span class="text-primary">Succeed</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to execution, Tajamu provides all the tools you need
            to create memorable events.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            class="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Event Creation</h3>
            <p class="text-gray-600 leading-relaxed">
              Create stunning events in minutes with our intuitive builder and
              customizable templates.
            </p>
          </div>

          <div
            class="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-success-soft rounded-xl flex items-center justify-center mb-6 group-hover:bg-success-600 transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-success-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Smart Ticketing
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Sell tickets, manage registrations, and track attendance with our
              comprehensive ticketing system.
            </p>
          </div>

          <div
            class="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-warning-soft rounded-xl flex items-center justify-center mb-6 group-hover:bg-warning transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-warning-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Attendee Management
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Engage attendees with personalized communications and seamless
              check-in experiences.
            </p>
          </div>

          <div
            class="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-error-soft rounded-xl flex items-center justify-center mb-6 group-hover:bg-error transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-error-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Analytics & Insights
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Track performance, measure success, and optimize future events
              with detailed analytics.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 px-4 bg-gray-50">
      <div class="app-container mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span class="text-primary">Works</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Tajamu in three simple steps and transform your
            event management experience.
          </p>
        </div>

        <!-- Steps Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <!-- Step 1 -->
          <div class="relative">
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-8">
                <div
                  class="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg
                    class="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    ></path>
                  </svg>
                </div>
                <div
                  class="absolute -top-2 -right-2 w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center"
                >
                  <span class="text-primary font-bold text-sm">1</span>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Create Account
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Sign up for free in under 30 seconds. No credit card required to
                get started with your event journey.
              </p>
            </div>
            <!-- Connector Line -->
            <div
              class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-200 to-transparent transform translate-x-4"
            ></div>
          </div>

          <!-- Step 2 -->
          <div class="relative">
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-8">
                <div
                  class="w-20 h-20 bg-success-soft rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg
                    class="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
                <div
                  class="absolute -top-2 -right-2 w-8 h-8 bg-success-100 rounded-full flex items-center justify-center"
                >
                  <span class="text-success-600 font-bold text-sm">2</span>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Create or Join Events
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Use our intuitive event builder to create stunning events, or
                discover and join exciting events in your area.
              </p>
            </div>
            <!-- Connector Line -->
            <div
              class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-success-200 to-transparent transform translate-x-4"
            ></div>
          </div>

          <!-- Step 3 -->
          <div class="relative">
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-8">
                <div
                  class="w-20 h-20 bg-warning-soft rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg
                    class="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div
                  class="absolute -top-2 -right-2 w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center"
                >
                  <span class="text-warning-600 font-bold text-sm">3</span>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Manage & Succeed
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Track attendance, engage with participants, and analyze your
                event's success with our comprehensive tools.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
          <a
            href="/register"
            class="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg shadow-lg hover:bg-brand-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Journey
            <svg
              class="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 px-4 bg-gray-50">
      <div class="app-container mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span class="text-primary">Event Organizers</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their event
            management experience with Tajamu.
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div
            class="bg-white rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300"
          >
            <div class="flex items-center mb-6">
              <div class="flex text-warning-soft">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <blockquote class="text-gray-700 text-lg leading-relaxed mb-6">
              "Tajamu transformed how we organize our corporate events. The
              ticketing system is incredibly intuitive, and our attendees love
              the seamless experience."
            </blockquote>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mr-4"
              >
                <span class="text-primary font-bold text-lg">S</span>
              </div>
              <div>
                <div class="font-bold text-gray-900">Sarah Johnson</div>
                <div class="text-gray-600 text-sm">Event Manager, TechCorp</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="bg-white rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300"
          >
            <div class="flex items-center mb-6">
              <div class="flex text-warning-soft">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <blockquote class="text-gray-700 text-lg leading-relaxed mb-6">
              "As an attendee, I appreciate how easy it is to discover and join
              events. The mobile experience is fantastic and check-in is always
              smooth."
            </blockquote>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mr-4"
              >
                <span class="text-success-600 font-bold text-lg">A</span>
              </div>
              <div>
                <div class="font-bold text-gray-900">Ahmed Hassan</div>
                <div class="text-gray-600 text-sm">Frequent Event Attendee</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="bg-white rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300"
          >
            <div class="flex items-center mb-6">
              <div class="flex text-warning-soft">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <blockquote class="text-gray-700 text-lg leading-relaxed mb-6">
              "The analytics dashboard gives us incredible insights into our
              events. We've increased attendance by 40% since switching to
              Tajamu."
            </blockquote>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-warning-100 rounded-full flex items-center justify-center mr-4"
              >
                <span class="text-warning-600 font-bold text-lg">M</span>
              </div>
              <div>
                <div class="font-bold text-gray-900">Maria Rodriguez</div>
                <div class="text-gray-600 text-sm">
                  Marketing Director, EventPro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Preview / Call-to-Action Section -->
    <section id="pricing" class="py-20 px-4 bg-primary">
      <div class="app-container text-center">
        <!-- Section Header -->
        <div class="mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Events?
          </h2>
          <p
            class="text-xl text-brand-100 text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of event organizers who have streamlined their
            workflow and increased attendance with Tajamu.
          </p>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-sky-700 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Quick Setup</h3>
            <p class="text-gray-300">
              Create your first event in under 5 minutes
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-amber-500 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">No Hidden Fees</h3>
            <p class="text-gray-300">Transparent pricing with no surprises</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-red-600 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">24/7 Support</h3>
            <p class="text-gray-300">Get help whenever you need it</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/register"
            class="inline-flex items-center px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50"
          >
            Start Free Trial
            <svg
              class="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </a>

          <a
            href="#"
            class="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
          >
            Book a Demo
            <svg
              class="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-12 pt-8 border-t border-white border-opacity-20">
          <p class="text-gray-300 text-sm mb-4">
            Trusted by 10,000+ event organizers worldwide
          </p>
          <div class="flex items-center justify-center space-x-8 opacity-60">
            <div class="text-white font-semibold">TechCorp</div>
            <div class="text-white font-semibold">EventPro</div>
            <div class="text-white font-semibold">MegaEvents</div>
            <div class="text-white font-semibold">StartupHub</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-200 py-16 px-4">
      <div class="app-container mx-auto">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <!-- Brand Section -->
          <div class="lg:col-span-1">
            <div class="flex items-center gap-2 mb-6">
              <div
                class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
              >
                <span class="text-white font-bold text-lg">T</span>
              </div>
              <span class="font-bold text-2xl text-white">Tajamu</span>
            </div>
            <p class="text-gray-400 leading-relaxed mb-6">
              The modern event management platform that helps you create,
              promote, and manage unforgettable experiences.
            </p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Product Links -->
          <div>
            <h3 class="font-bold text-white text-lg mb-6">Product</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Features</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Integrations</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >API</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Mobile App</a
                >
              </li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h3 class="font-bold text-white text-lg mb-6">Company</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Careers</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Press</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Partners</a
                >
              </li>
            </ul>
          </div>

          <!-- Support Links -->
          <div>
            <h3 class="font-bold text-white text-lg mb-6">Support</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Help Center</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Contact Us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Community</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Status</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Security</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div
          class="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div class="flex items-center gap-6 text-sm text-gray-400">
            <span>© 2024 Tajamu. All rights reserved.</span>
            <a href="#" class="hover:text-white transition-colors duration-300"
              >Privacy Policy</a
            >
            <a href="#" class="hover:text-white transition-colors duration-300"
              >Terms of Service</a
            >
            <a href="#" class="hover:text-white transition-colors duration-300"
              >Cookie Policy</a
            >
          </div>
          <div class="text-sm text-gray-400">
            Made with ❤️ for event organizers worldwide
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx";

const sections = ref<NodeListOf<Element>>();
const currentSection = shallowRef<string>("#home");

const route = useRoute();
const isOpenMobileMenu = ref<boolean>(false);

onMounted(() => {
  // Get all sections with IDs
  sections.value = document.querySelectorAll("section[id]");

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`;
          if (window.location.hash !== newHash) {
            // history.replaceState(null, "", newHash);
            currentSection.value = newHash;
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px",
    }
  );
  sections.value.forEach((section) => {
    observer.observe(section);
  });
});

useServerHead({
  title: "Tajamu - Event Management",
  meta: [
    {
      name: "description",
      content:
        "Tajamu is an event management platform that helps you plan, organize, and manage your events with ease.",
    },
  ],
});
</script>

<style scoped>
.bg-brand-500 {
  background-color: #7c3aed;
}
.bg-brand-300 {
  background-color: #c4b5fd;
}
.bg-brand-700 {
  background-color: #5b21b6;
}
.text-brand-500 {
  color: #7c3aed;
}
.text-brand-300 {
  color: #c4b5fd;
}
.text-brand-700 {
  color: #5b21b6;
}
.bg-success-500 {
  background-color: #10b981;
}
.bg-success-700 {
  background-color: #047857;
}
.bg-warning-400 {
  background-color: #facc15;
}
.bg-error-600 {
  background-color: #dc2626;
}
</style>
