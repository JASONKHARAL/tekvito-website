
import { useEffect, useRef, useState } from "react";
import "./ChatWidget.css";

const API_BASE = "/api/chat";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [supportType, setSupportType] = useState("ai");
  const [sessionToken, setSessionToken] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);

  // Start a new conversation when the chat opens or support mode changes.
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    async function startConversation() {
      setLoading(true);
      setError("");
      setMessages([]);
      setSessionToken("");

      try {
        const response = await fetch(`${API_BASE}/start.php`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_mode: supportType,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not start chat.");
        }

        if (!cancelled) {
          setSessionToken(data.session_token);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Unable to connect to support.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    startConversation();

    return () => {
      cancelled = true;
    };
  }, [isOpen, supportType]);

  // Retrieve messages regularly.
  useEffect(() => {
    if (!sessionToken) return;

    let cancelled = false;

    async function loadMessages() {
      try {
        const response = await fetch(
          `${API_BASE}/messages.php?session_token=${encodeURIComponent(sessionToken)}`,
          { cache: "no-store" }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not load messages.");
        }

        if (!cancelled) {
          setMessages(
            Array.isArray(data.messages) ? data.messages : []
          );
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Unable to load messages.");
        }
      }
    }

    loadMessages();

    const interval = setInterval(loadMessages, 3000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [sessionToken]);

  // Keep the latest message visible.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Send a visitor message.
  async function handleSend(event) {
    event.preventDefault();

    const message = input.trim();

    if (!message || !sessionToken || sending) return;

    setSending(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/send.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_token: sessionToken,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent.");
      }

      setInput("");
    } catch (err) {
      setError(err.message || "Unable to send message.");
    } finally {
      setSending(false);
    }
  }

  const quickOptions = [
    "Our Services",
    "For Employers",
    "Career Opportunities",
    "Contact Tekvito",
  ];

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">

          <div className="chat-header">
            <div>
              <h3>Tekvito Support</h3>
              <span>How can we help you?</span>
            </div>

            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chat-tabs">
            <button
              className={supportType === "ai" ? "active" : ""}
              onClick={() => setSupportType("ai")}
            >
              AI Assistant
            </button>

            <button
              className={supportType === "human" ? "active" : ""}
              onClick={() => setSupportType("human")}
            >
              Human Support
            </button>
          </div>

          <div className="chat-body">

            <div className="chat-message bot-message">
              {supportType === "ai" ? (
                <>
                  Hello! Welcome to Tekvito.
                  <br />
                  You are chatting with our AI Assistant channel.
                  Automated AI replies are not connected yet.
                </>
              ) : (
                <>
                  Welcome to Tekvito Human Support.
                  <br />
                  Your messages will be saved. Live representative
                  replies are not connected yet.
                </>
              )}
            </div>

            {supportType === "ai" && messages.length === 0 && (
              <div className="chat-options">
                {quickOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setInput(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={message.id || index}
                className={`chat-message ${
                  message.sender === "visitor"
                    ? "visitor-message"
                    : "bot-message"
                }`}
              >
                {message.message}
              </div>
            ))}

            <div ref={messagesEndRef} />

            {loading && (
              <div className="chat-message bot-message">
                Connecting...
              </div>
            )}

            {error && (
              <div className="chat-message bot-message">
                {error}
              </div>
            )}
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={!sessionToken || loading || sending}
            />

            <button
              type="submit"
              disabled={!sessionToken || !input.trim() || sending}
              aria-label="Send message"
            >
              {sending ? "..." : "➤"}
            </button>
          </form>

          <div className="chat-footer">
            Powered by Tekvito
          </div>

        </div>
      )}

      <button
        className="chat-launcher"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
}

export default ChatWidget;

