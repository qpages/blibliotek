import { useState } from "react";

const TutorialSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">
          📚 Tutorial: Building the Scroll Animation effect
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-700 shadow-sm transition-all hover:bg-slate-200 hover:shadow-md active:scale-95"
          aria-label={isOpen ? "Collapse tutorial" : "Expand tutorial"}
        >
          <span className="font-medium">{isOpen ? "Hide" : "Show"}</span>
          <svg
            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "mt-6 max-h-[8000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-6 text-slate-700">
          {/* Introduction */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              What we&apos;re building
            </h3>
            <p className="leading-relaxed">
              The cards above respond to your scroll direction - they transform
              smoothly as you scroll down or up. When scrolling down, cards move
              up and scale to full size. When scrolling up, they move down and
              shrink slightly.
            </p>
          </div>

          {/* useRef Explanation */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              📌 Step 1: Understanding useRef
            </h3>
            <p className="mb-3 leading-relaxed">
              <code className="rounded bg-slate-100 px-2 py-1 font-mono text-sm text-pink-600">
                useRef
              </code>{" "}
              is a React hook that lets you reference DOM elements and persist
              values between renders without causing re-renders.
            </p>
            <div className="rounded bg-slate-50 p-4 font-mono text-sm">
              <div className="text-slate-600">{"// Create references"}</div>
              <div>
                <span className="text-purple-600">const</span> cardRefs ={" "}
                <span className="text-blue-600">useRef</span>([]);
              </div>
              <div>
                <span className="text-purple-600">const</span> lastScroll ={" "}
                <span className="text-blue-600">useRef</span>(window.scrollY);
              </div>
            </div>
            <ul className="mt-3 space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>cardRefs</strong>: Stores references to our 3 card DOM
                  elements
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>lastScroll</strong>: Remembers the previous scroll
                  position to detect direction
                </span>
              </li>
            </ul>
          </div>

          {/* Transform Configuration */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              🎨 Step 2: Defining Transformations
            </h3>
            <p className="mb-3 leading-relaxed">
              We define how each card should transform based on scroll
              direction:
            </p>
            <div className="rounded bg-slate-50 p-4 font-mono text-sm">
              <div className="text-slate-600">{"// Card 1 configuration"}</div>
              <div>{"{"}</div>
              <div className="pl-4">
                <span className="text-blue-600">up</span>:{" "}
                <span className="text-green-600">
                  &quot;rotate(-1.8deg) scale(1)&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-blue-600">down</span>:{" "}
                <span className="text-green-600">
                  &quot;rotate(-5.4deg) scale(0.95)&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-blue-600">transition</span>:{" "}
                <span className="text-green-600">
                  &quot;transform 0.3s ease-in-out&quot;
                </span>
              </div>
              <div>{"}"}</div>
            </div>
            <ul className="mt-3 space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>up</strong>: Transform when scrolling down (cards move
                  up)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>down</strong>: Transform when scrolling up (cards move
                  down)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>transition</strong>: CSS transition for smooth
                  animation (0.3s duration)
                </span>
              </li>
            </ul>
          </div>

          {/* Event Listener */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              👂 Step 3: Setting Up the useEffect Hook
            </h3>
            <p className="mb-3 leading-relaxed">
              <code className="rounded bg-slate-100 px-2 py-1 font-mono text-sm text-pink-600">
                useEffect
              </code>{" "}
              is a React hook that lets you perform side effects (like adding
              event listeners) in your component. It runs after the component
              renders.
            </p>
            <div className="rounded bg-slate-50 p-4 font-mono text-sm">
              <div>
                <span className="text-blue-600">useEffect</span>(() ={">"} {"{"}
              </div>
              <div className="pl-4 text-slate-600">
                {"// This code runs when component mounts"}
              </div>
              <div className="pl-4">
                <span className="text-purple-600">const</span> handleScroll = ()
                ={">"} {"{"}...{"}"};
              </div>
              <div className="pl-4">
                window.<span className="text-blue-600">addEventListener</span>
                (...);
              </div>
              <div className="mt-2 pl-4 text-slate-600">
                {"// Cleanup function runs when component unmounts"}
              </div>
              <div className="pl-4">
                <span className="text-purple-600">return</span> () ={">"} {"{"}
                ...{"}"};
              </div>
              <div>{"}, []);"}</div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-semibold text-blue-900">
                  🎯 The Empty Dependency Array{" "}
                  <code className="rounded bg-white px-2 py-1 text-sm">[]</code>
                </h4>
                <p className="text-sm leading-relaxed text-blue-800">
                  The <code className="rounded bg-white px-1">[]</code> at the
                  end means this effect runs only once when the component first
                  mounts, similar to{" "}
                  <code className="rounded bg-white px-1">
                    componentDidMount
                  </code>{" "}
                  in class components. If we omitted it, the effect would run
                  after every render!
                </p>
              </div>
            </div>
          </div>

          {/* addEventListener with passive */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              🚀 Step 4: Adding the Scroll Event Listener
            </h3>
            <div className="rounded bg-slate-50 p-4 font-mono text-sm">
              <div>
                window.<span className="text-blue-600">addEventListener</span>(
              </div>
              <div className="pl-4">
                <span className="text-green-600">&quot;scroll&quot;</span>,
              </div>
              <div className="pl-4">handleScroll,</div>
              <div className="pl-4">
                {"{ "}
                <span className="text-blue-600">passive</span>:{" "}
                <span className="text-orange-600">true</span> {"}"}
              </div>
              <div>);</div>
            </div>
            <ul className="mt-4 space-y-3 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2 font-bold text-blue-600">1.</span>
                <div>
                  <strong>&quot;scroll&quot;</strong> - The event type
                  we&apos;re listening for
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-blue-600">2.</span>
                <div>
                  <strong>handleScroll</strong> - The function to call when the
                  event fires
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-blue-600">3.</span>
                <div>
                  <strong>
                    {"{"}passive: true{"}"}
                  </strong>{" "}
                  - A performance optimization
                </div>
              </li>
            </ul>

            <div className="mt-4 rounded-lg bg-amber-50 p-4">
              <h4 className="mb-2 font-semibold text-amber-900">
                ⚡ What does{" "}
                <code className="rounded bg-white px-2 py-1 text-sm">
                  {"{"}passive: true{"}"}
                </code>{" "}
                mean?
              </h4>
              <div className="space-y-2 text-sm leading-relaxed text-amber-800">
                <p>
                  By default, scroll event listeners can call{" "}
                  <code className="rounded bg-white px-1">
                    preventDefault()
                  </code>{" "}
                  to stop scrolling. The browser must wait to see if you&apos;ll
                  do this, which can cause lag.
                </p>
                <p className="font-semibold">
                  Setting{" "}
                  <code className="rounded bg-white px-1">passive: true</code>{" "}
                  tells the browser: &quot;I promise I won&apos;t call
                  preventDefault(), so don&apos;t wait for me!&quot;
                </p>
                <p>
                  This allows the browser to scroll immediately, making the page
                  feel smoother and more responsive. It&apos;s especially
                  important for mobile devices.
                </p>
              </div>
            </div>

            <div className="mt-3 rounded bg-slate-50 p-4 font-mono text-sm">
              <div className="text-slate-600">
                {"// Inside handleScroll function"}
              </div>
              <div>
                <span className="text-purple-600">const</span> currentScroll =
                window.scrollY;
              </div>
              <div>
                <span className="text-purple-600">const</span> isScrollingDown =
                currentScroll {">"} lastScroll.current;
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              By comparing the current scroll position with the last one, we
              know if the user is scrolling down or up.
            </p>
          </div>

          {/* Cleanup Function */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              🧹 Step 5: The Cleanup Function (Critical!)
            </h3>
            <p className="mb-3 leading-relaxed">
              When a component unmounts, we must remove event listeners to
              prevent memory leaks. The cleanup function runs automatically when
              the component is removed from the DOM.
            </p>
            <div className="rounded bg-slate-50 p-4 font-mono text-sm">
              <div>
                <span className="text-purple-600">return</span> () ={">"} {"{"}
              </div>
              <div className="pl-4">
                window.
                <span className="text-blue-600">removeEventListener</span>(
                <span className="text-green-600">&quot;scroll&quot;</span>,
                handleScroll);
              </div>
              <div className="pl-4">
                <span className="text-blue-600">clearTimeout</span>(timeoutId);
              </div>
              <div>{"};"};</div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-red-50 p-4">
                <h4 className="mb-2 font-semibold text-red-900">
                  ⚠️ Why is cleanup so important?
                </h4>
                <ul className="space-y-2 text-sm leading-relaxed text-red-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Memory Leaks:</strong> Without cleanup, event
                      listeners stay active even after the component is gone,
                      consuming memory and potentially causing errors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Multiple Listeners:</strong> If the component
                      re-mounts, you&apos;ll add duplicate listeners, making
                      your app slower with each render
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Zombie Functions:</strong> Functions may try to
                      update state on unmounted components, causing React
                      warnings and bugs
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-green-50 p-4">
                <h4 className="mb-2 font-semibold text-green-900">
                  ✅ What does each cleanup line do?
                </h4>
                <div className="space-y-3 text-sm leading-relaxed text-green-800">
                  <div>
                    <code className="rounded bg-white px-2 py-1 font-mono">
                      removeEventListener(&quot;scroll&quot;, handleScroll)
                    </code>
                    <p className="mt-1">
                      Removes the scroll listener. You must pass the{" "}
                      <strong>exact same function reference</strong> that you
                      used in addEventListener. This is why we define
                      handleScroll inside useEffect!
                    </p>
                  </div>
                  <div>
                    <code className="rounded bg-white px-2 py-1 font-mono">
                      clearTimeout(timeoutId)
                    </code>
                    <p className="mt-1">
                      Cancels any pending setTimeout calls. If the component
                      unmounts before the timeout fires, this prevents the
                      timeout callback from running on a component that no
                      longer exists.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-purple-50 p-4">
                <h4 className="mb-2 font-semibold text-purple-900">
                  🔄 When does the cleanup function run?
                </h4>
                <ul className="space-y-2 text-sm leading-relaxed text-purple-800">
                  <li className="flex items-start">
                    <span className="mr-2">1.</span>
                    <span>
                      <strong>Before re-running the effect</strong> (if
                      dependencies change) - not in our case since we use []
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.</span>
                    <span>
                      <strong>When the component unmounts</strong> - when
                      it&apos;s removed from the page
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Applying Transforms */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              ✨ Step 6: Applying CSS Transitions
            </h3>
            <p className="mb-3 leading-relaxed">
              For each card, we apply the appropriate transform and transition:
            </p>
            <div className="rounded bg-slate-50 p-4 font-mono text-sm">
              <div>
                element.<span className="text-blue-600">style</span>.
                <span className="text-purple-600">transition</span> ={" "}
                <span className="text-green-600">
                  &quot;transform 0.3s ease-in-out&quot;
                </span>
                ;
              </div>
              <div>
                element.<span className="text-blue-600">style</span>.
                <span className="text-purple-600">transform</span> =
                isScrollingDown
              </div>
              <div className="pl-4">
                ?{" "}
                <span className="text-green-600">
                  &quot;rotate(-1.8deg) scale(1)&quot;
                </span>
              </div>
              <div className="pl-4">
                :{" "}
                <span className="text-green-600">
                  &quot;rotate(-5.4deg) scale(0.95)&quot;
                </span>
                ;
              </div>
            </div>
            <ul className="mt-3 space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>element.style.transition</strong>: Defines how
                  smoothly the transform happens
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>element.style.transform</strong>: Applies the actual
                  CSS transform (rotate, scale, translateY)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>ease-in-out</strong>: Animation timing function (slow
                  start, fast middle, slow end)
                </span>
              </li>
            </ul>
          </div>

          {/* Attaching Refs */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              🔗 Step 7: Connecting Refs to DOM Elements
            </h3>
            <p className="mb-3 leading-relaxed">
              In the JSX, we attach our refs to each card:
            </p>
            <div className="rounded bg-slate-50 p-4 font-mono text-sm">
              <div>{"<div"}</div>
              <div className="pl-4">
                <span className="text-purple-600">ref</span>={"{"}(el) ={">"}{" "}
                (cardRefs.current[<span className="text-orange-600">0</span>] =
                el){"}"}
              </div>
              <div className="pl-4">
                <span className="text-purple-600">className</span>=
                <span className="text-green-600">&quot;...&quot;</span>
              </div>
              <div>{">"}</div>
            </div>
            <p className="mt-3 leading-relaxed">
              This callback ref syntax lets us store the DOM element in our
              array when the component renders.
            </p>
          </div>

          {/* Key Concepts Summary */}
          <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <h3 className="mb-3 text-xl font-semibold text-indigo-800">
              🎓 Key Concepts Summary
            </h3>
            <ul className="space-y-2 leading-relaxed text-slate-700">
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">✓</span>
                <span>
                  <strong>useRef</strong> creates persistent references without
                  causing re-renders
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">✓</span>
                <span>
                  <strong>useEffect</strong> runs side effects like adding event
                  listeners
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">✓</span>
                <span>
                  <strong>CSS transitions</strong> make transforms animate
                  smoothly
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">✓</span>
                <span>
                  <strong>transform</strong> property combines rotate, scale,
                  and translate effects
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">✓</span>
                <span>
                  <strong>passive: true</strong> on scroll listeners improves
                  performance
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">✓</span>
                <span>
                  Always <strong>cleanup</strong> event listeners in the return
                  function
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;
